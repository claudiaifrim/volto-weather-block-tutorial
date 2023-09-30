export const weatherBlockSchema = (props) => {
  return {
    title: 'Weather Block',
    description: 'Display weather information for location.',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['latitude', 'longitude', 'location'],
      },
    ],
    properties: {
      latitude: {
        title: 'Latitude',
        description:
          'Enter the latitude of the location for which you want to display the weather (e.g., 43.1849).',
        widget: 'text',
      },
      longitude: {
        title: 'Longitude',
        description:
          'Enter the longitude of the location for which you want to display the weather (e.g., -2.4716).',
        widget: 'text',
      },
      location: {
        title: 'Location',
        description:
          'Enter the name of the location for which you want to display the weather (e.g., Eibar, Basque Country).',
        widget: 'text',
      },
    },
    required: ['latitude', 'longitude', 'location'],
  };
};

export default weatherBlockSchema;
