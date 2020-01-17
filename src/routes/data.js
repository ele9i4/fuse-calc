export function get (req, res) {
  const result = [
    {
      name: "Atmega328p",
    },
    {
      name: "Attiny45",
    }
  ];
  res.end(JSON.stringify(result));
}
