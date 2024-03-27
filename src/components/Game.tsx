import React, { useState, useEffect } from 'react';
import { WidgetsCard } from './WidgetsCard';
import { Button } from './ui/button';
import { Plus } from './icons/Plus';
import { GameInfo } from './Interfaces'; // Import the Module interface

const Game = ({ gameInfo }: { gameInfo: GameInfo }) => { // Change GameInfo[] to GameInfo
  const [widgetsCards, setWidgetsCards] = useState<GameInfo[]>([]);

  useEffect(() => {
    // Initialize widget cards with the gameInfo when the component mounts
    if (gameInfo) {
      setWidgetsCards([gameInfo]); // Wrap the single gameInfo object in an array
    }
  }, [gameInfo]);

  async function createWidgetCard() {
    try {
      const response = await fetch('/api/create-widget-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `Player ${widgetsCards.length + 1}`,
          components: [],
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create widget card');
      }
      const data = await response.json();
      setWidgetsCards((current) => [...current, data]);
    } catch (error) {
      console.error('Error creating widget card:', error);
    }
  }

  function removeWidgetCardByName(name: string) {
    setWidgetsCards((current) =>
      current.map((info) => ({
        ...info,
        modules: info.modules.filter((module) => module.name !== name),
      }))
    );
  }
  

  return (
    <>
      <div className="flex h-full w-3/4 flex-col gap-4">
        {widgetsCards.map((card, index) => (
          <React.Fragment key={index}>
            {card.modules.map((module, moduleIndex) => (
              <WidgetsCard
                key={moduleIndex}
                name={module.name}
                components={module.components}
                onRemove={() => removeWidgetCardByName(module.name)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-auto flex w-full justify-end pb-[40px]">
        <Button variant="secondary" onClick={createWidgetCard}>
          <Plus />
        </Button>
      </div>
    </>
  );
};

export { Game };
