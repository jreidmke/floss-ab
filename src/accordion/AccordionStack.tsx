import { Accordion } from './Accordion';
import { Flavors } from './Flavors';
import { FlossTypes } from './FlossTypes';
import { Health } from './Health';

function AccordionStack() {
  return (
    <div>
      <Accordion color="bg-blue-300" title="Flavors" content={<Flavors />} />
      <Accordion
        color="bg-yellow-400"
        title="Floss Types"
        content={<FlossTypes />}
      />
      <Accordion
        color="bg-red-400"
        title="Health Information"
        content={<Health />}
      />
    </div>
  );
}

export { AccordionStack };
