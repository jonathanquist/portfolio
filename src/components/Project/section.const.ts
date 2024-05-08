export const getSectionTitle = (name: string) => {
  switch (name) {
    case 'understanding-user':
      return {
        sectionName: 'Understanding the user',
        bullets: ['User research', 'Pain-points', 'Personas'],
      };
    case 'starting-design':
      return {
        sectionName: 'Starting the design',
        bullets: ['Wireframes', 'Low-fidelity prototypes', 'Usability studies'],
      };
    case 'refining-design':
      return {
        sectionName: 'Refining the design',
        bullets: ['Mockups', 'High-fidelity prototypes', 'Accessibility'],
      };
    case 'going-forward':
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
