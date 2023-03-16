import { useState } from "react";
import { AddOutlined } from "@mui/icons-material";
import {
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "white",
    border: "2px solid #543884",
    boxShadow: 24,
    p: 4,
};

export const CreatePost = ({ onClickCreate }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isValidPost, setIsValidPost] = useState(true);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    const checkIsValidPost = () => {
        const newPost = {
            title,
            body,
            userId,
        };
        if (title.length == 0 || body.length == 0 || userId.length == 0) {
            setIsValidPost(false);
            return;
        } else {
            setIsValidPost(true);
            onClickCreate(newPost);
            setTitle("");
            setBody("");
            setUserId("");
            handleClose();
        }
    };

    const onChangeValueTitle = ({ target }) => {
        setTitle(target.value);
    };

    const onChangeValueBody = ({ target }) => {
        setBody(target.value);
    };

    const onChangeValueUserId = ({ target }) => {
        setUserId(target.value);
    };

    return (
        <>
            <IconButton
                size="large"
                sx={{
                    color: "white",
                    background: "#262254",
                    ":hover": { background: "#543884" },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
                onClick={handleOpen}
            >
                <AddOutlined sx={{ fontSize: 30 }}>aff</AddOutlined>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Crear un nuevo Post
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        LLene los campos para agregar un nuevo post
                    </Typography>
                    <TextField
                        sx={{
                            m: 1,
                            width: "90%",
                        }}
                        placeholder="Titulo"
                        type="text"
                        value={title}
                        onChange={onChangeValueTitle}
                    />
                    <TextField
                        sx={{
                            m: 1,
                            width: "90%",
                        }}
                        placeholder="Cuerpo"
                        type="text"
                        value={body}
                        onChange={onChangeValueBody}
                    />
                    <TextField
                        sx={{
                            m: 1,
                            width: "90%",
                        }}
                        placeholder="UserId"
                        type="number"
                        value={userId}
                        onChange={onChangeValueUserId}
                    />
                    {isValidPost ? null : (
                        <Typography variant="body2">
                            {" "}
                            Los campos no pueden estar vacios{" "}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        sx={{ marginRight: 1 }}
                        onClick={() => {
                            checkIsValidPost();
                        }}
                    >
                        Crear
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
        </>
    );
};
