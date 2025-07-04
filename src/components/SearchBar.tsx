import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (q: string) => void;
}) {
  const [keyword, setKeyword] = useState("");

  return (
    <TextField
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSearch(keyword.trim());
      }}
      placeholder="검색어를 입력하세요"
      variant="outlined"
      size="small"
      fullWidth
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          height: 40,
          paddingRight: 0,
        },
        "& input": {
          padding: "10px 14px",
          fontSize: 14,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ mr: 2 }}>
            <IconButton
              onClick={() => onSearch(keyword.trim())}
              edge="end"
              size="small"
              sx={{ p: "5px" }}
            >
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
