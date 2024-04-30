





import Stack from 'react-bootstrap/Stack';

export default function HorizontalStack() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

