import { SearchOutlined } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const SearchBar = ({onSearchPost}) => {
    const [value, setValue] = useState(Number);

    const onChangeValue = ({ target }) => {
        setValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (value == '' || value == 0) return;
        onSearchPost(value);
        setValue('');
    };

    return (
        <Box
            component="form"
            sx={{
                m: 2,
                width: "100%",
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField
                sx={{
                    width: "50%",
                }}
                id="outlined-basic"
                label="Post Id"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }}
                type="number"
                value={value == 0? '' : value}
                onChange={onChangeValue}

            />
            <Button
                sx={{
                    m: 1,
                }}
                variant="outlined"
                onClick={onSubmit}
            >
                Buscar
            </Button>
        </Box>
    );
};
