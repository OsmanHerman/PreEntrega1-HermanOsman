import { Stack, Button } from "@mui/material";

const NavbarMenu = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="Text">Todas</Button>
      <Button variant="Text">Urbanas</Button>
      <Button variant="Text">Deportivas</Button>
    </Stack>
  );
};

export default NavbarMenu;