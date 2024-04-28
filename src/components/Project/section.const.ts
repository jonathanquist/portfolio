export const getSectionTitle = (name: string) => {
  switch (name) {
    case 'understandingUser':
      return {
        sectionName: 'Understanding the user',
        bullets: ['User research', 'Pain-points', 'Personas'],
      };
    case 'startingDesign':
      return {
        sectionName: 'Starting the design',
        bullets: ['Wireframes', 'Low-fidelity prototypes', 'Usability studies'],
      };
    case 'refiningDesign':
      return {
        sectionName: 'Refining the design',
        bullets: ['Mockups', 'High-fidelity prototypes', 'Accessibility'],
      };
    case 'goingForward':
      return {
        sectionName: 'Going forward',
        bullets: ['Takeaways', 'What I learned', 'Acknolwedgements'],
      };
    default:
      return {
        sectionName: 'Section',
        bullets: [],
      };
  }
};
