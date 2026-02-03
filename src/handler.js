// Lambda handler for check-in operations
exports.handler = async (event) => {
  console.log('Check-in event:', event);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Check-in successful' })
  };
};
