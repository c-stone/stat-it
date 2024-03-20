import { auth, currentUser } from "@clerk/nextjs";

interface CreateGameRequest {
  gameName: string;
  gameID: string;
}

export const getCurrentUser = async () => {
  const { userId } = auth();
  if (userId) {
    return await currentUser();
  } else {
    return null;
  }
};

export async function POST(
  req: Request,
  res: Response
) {
  if (req.method === 'POST') {
    const { gameName, gameID } = await req.json();
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new Error('User is not authenticated.');
    }
    try {
        
      // Make your API call to create the game here
      // For example:
      const response = await fetch('https://bxqbll87rl.execute-api.us-east-1.amazonaws.com/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers here
        },
        body: JSON.stringify({ gameName, gameID, currentUser })
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
              'Content-Type': 'application/json'
          }
      });
      } else {
          // Handle error responses from the backend
          const errorData = await response.json();
          const errorMessage = errorData.error || 'Error creating game';
          return new Response(JSON.stringify({ error: errorMessage }), {
              status: response.status,
              headers: {
                  'Content-Type': 'application/json'
              }
          });
        }
      } catch (error) {
        // Handle internal server error
        console.error('Error creating game:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
   } else {
      // Handle other HTTP methods
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: {
              'Content-Type': 'application/json'
          }
      });
    }    
}