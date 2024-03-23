/* eslint-disable */
import { getCurrentUser } from "../auth-utility";

export async function POST(
  req: Request,
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

export async function GET(req: Request) {
  if (req.method === 'GET') {
    try {
      const userObject = await getCurrentUser();
      const currentUser = userObject?.id;

      // Make a GET request to the external API to fetch games
      const response = await fetch(`https://bxqbll87rl.execute-api.us-east-1.amazonaws.com/api/games?user=${currentUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response
        const games = await response.json();
        // console.log(games);
        // console.log(currentUser);
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
    } catch (error) {
      console.error('Error fetching games:', error);
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