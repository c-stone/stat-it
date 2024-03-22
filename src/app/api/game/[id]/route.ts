import { auth, currentUser } from "@clerk/nextjs";

export const getCurrentUser = async () => {
  const { userId } = auth();
  if (userId) {
    return await currentUser();
  } else {
    return null;
  }
};

export async function GET(req: Request, res: Response) {
  try {
    // Retrieve the current user
    // const userObject = await getCurrentUser();
    // const currentUser = userObject?.id;

    // Check if the request method is GET
    if (req.method === 'GET') {
      // Extract the URL from the request
      const url = new URL(req.url);

      // Get the pathname, which contains the path part of the URL
      const pathName = url.pathname;

      // Split the pathname using '/' as the delimiter
      const parts = pathName.split('/');

      // The parameter you want is likely the last part of the path
      const gameId = parts[parts.length - 1];
      console.log(gameId);
      // Make a GET request to the external API to fetch games
      const response = await fetch(`https://bxqbll87rl.execute-api.us-east-1.amazonaws.com/api/game/${gameId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response
        const games = await response.json();

        // Return the list of games as a JSON response
        return new Response(JSON.stringify(games), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        // Handle error responses from the external API
        const errorData = await response.json();
        const errorMessage = errorData.error || 'Error fetching games';
        return new Response(JSON.stringify({ error: errorMessage }), {
          status: response.status,
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
  } catch (error) {
    console.error('Error fetching games:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}