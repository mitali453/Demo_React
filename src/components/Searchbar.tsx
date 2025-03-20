import { TextField } from "@mui/material";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value.trim());
  };

  return (
    <TextField
      label="Search users"
      variant="outlined"
      fullWidth
      value={query}
      onChange={handleChange}
      sx={{ mb: 2 }}
    />
  );
}
