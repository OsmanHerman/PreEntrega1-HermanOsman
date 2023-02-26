import { Stack, Button } from "@mui/material";

const NavbarMenu = () => {
  return (
    <Stack spacing={2} direction="row" style={{color: "white"}}>
      <Button variant="Text" style={{fontSize: "16px", fontWeight: "600"}}>Todas</Button>
      <Button variant="Text" style={{fontSize: "16px", fontWeight: "600"}}>Abrigos</Button>
      <Button variant="Text" style={{fontSize: "16px", fontWeight: "600"}}>Camisetas</Button>
      <Button variant="Text" style={{fontSize: "16px", fontWeight: "600"}}>Pantalones</Button>
    </Stack>
    
  );
};

export default NavbarMenu;