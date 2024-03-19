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
        return new Response({status: 200, data});
      } else {
        // Handle error responses from the backend
        const errorData = await response.json()
        return new Response({status: response.status, error: errorData.error || 'Error creating game'});
      }
    } catch (error) {
      console.error('Error creating game:', error);
      return new Response({status: 500, error: 'Internal Server Error' });
    }
  } else {
    // Handle other HTTP methods
    return new Response({status: 405, error: 'Method not allowed' });
  }
}