
export const filterProperties = (properties, keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    return properties.filter(property => {
      return property.name.toLowerCase().includes(lowerKeyword)  ||
             property.city.toLowerCase().includes(lowerKeyword)  ||
             property.state.toLowerCase().includes(lowerKeyword) ||
             property.country.toLowerCase().includes(lowerKeyword);
    });
  };
