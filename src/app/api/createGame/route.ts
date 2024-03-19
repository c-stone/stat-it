export async function POST(
  req: Request,
  res: Response
) {
  if (req.method === 'POST') {
    const { searchParams } = new URL(req.url)
    const gameID = searchParams.get('gameID')
    try {
        
      // Make your API call to create the game here
      // For example:
      const response = await fetch(`https://bxqbll87rl.execute-api.us-east-1.amazonaws.com/api/games?gameID=${gameID}&username=test`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers here
        },
      });

      console.log(response);

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