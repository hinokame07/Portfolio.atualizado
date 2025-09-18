// Utilitários para integração com Discord

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string | null;
  discriminator: string;
  global_name?: string;
}

export const DISCORD_USER_ID = '947989757751881758'; // Substitua pelo seu ID do Discord

/**
 * Busca informações do usuário do Discord usando uma API proxy
 * Como a API oficial do Discord requer autenticação, usamos um serviço proxy
 */
export const fetchDiscordUser = async (userId: string): Promise<string> => {
  try {
    // Usando nosso próprio endpoint proxy para evitar problemas de CORS
    const response = await fetch(`/api/discord-user/${userId}`);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar dados do Discord');
    }
    
    const userData = await response.json();
    
    // Verificar se houve erro no backend
    if (userData.error) {
      throw new Error(userData.message || 'Erro no servidor');
    }
    
    // Construir URL do avatar
    if (userData.avatar && userData.avatar.id) {
      const isAnimated = userData.avatar.id.startsWith('a_');
      const extension = isAnimated ? 'gif' : 'png';
      return `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar.id}.${extension}?size=256`;
    }
    
    // Avatar padrão se não tiver avatar customizado
    const defaultAvatarIndex = userData.tag ? 
      (parseInt(userData.tag.split('#')[1]) || 0) % 5 : 0;
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;
    
  } catch (error) {
    console.error('Erro ao buscar avatar do Discord:', error);
    // Retorna imagem padrão em caso de erro
    return 'https://i.pinimg.com/originals/44/83/f9/4483f9260bacfdd5875c52df5942b6a9.gif';
  }
};

/**
 * Hook personalizado para buscar e atualizar avatar do Discord
 */
export const useDiscordAvatar = (userId: string) => {
  const [avatar, setAvatar] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchAvatar = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const avatarUrl = await fetchDiscordUser(userId);
      setAvatar(avatarUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setAvatar('https://i.pinimg.com/736x/d0/f7/b2/d0f7b2b45252f4273568b50b4344e7d0.jpg');
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  React.useEffect(() => {
    fetchAvatar();
    
    // Atualizar avatar a cada 10 minutos
    const interval = setInterval(fetchAvatar, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [fetchAvatar]);

  return { avatar, isLoading, error, refetch: fetchAvatar };
};
