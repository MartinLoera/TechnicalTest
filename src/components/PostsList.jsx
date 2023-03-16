import { Delete, Edit } from "@mui/icons-material";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { purpleTheme } from "../theme/theme";

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

export const PostsList = ({ postsList, onClickDelete, onClickReplace }) => {
    const isSmallOrLess = useMediaQuery(purpleTheme.breakpoints.up("md"));
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isValidPost, setIsValidPost] = useState(true);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    const [id, setId] = useState("");

    const onChangeValueTitle = ({ target }) => {
        setTitle(target.value);
    };

    const onChangeValueBody = ({ target }) => {
        setBody(target.value);
    };

    const onChangeValueUserId = ({ target }) => {
        setUserId(target.value);
    };


    const setPostToUpdate = (postId) => {
        const result = postsList.find((postItem) => postItem.id === postId);
        setTitle(result.title);
        setBody(result.body);
        setId(result.id);
        setUserId(result.userId);
    };

    const checkIsValidPost = () => {
        
        const newPost = {
            title,
            body,
            userId,
            id,
        };
        if (title.length == 0 || body.length == 0 || userId.length == 0) {
            setIsValidPost(false);
            return;
        } else {
            setIsValidPost(true);
            onClickReplace(newPost);
            handleClose();
        }
    };

    return (
        <>
            {isSmallOrLess ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Contenido</TableCell>
                            <TableCell>UserId</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {postsList.map((postItem) => (
                            <TableRow key={postItem.id}>
                                <TableCell component="th" scope="row">
                                    {postItem.id}
                                </TableCell>
                                <TableCell align="right">
                                    {postItem.title}
                                </TableCell>
                                <TableCell align="right">
                                    {postItem.body}
                                </TableCell>
                                <TableCell align="right">
                                    {postItem.userId}
                                </TableCell>
                                <TableCell align="right">
                                    <ButtonGroup>
                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                onClickDelete(postItem.id)
                                            }
                                        >
                                            <Delete></Delete>
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            onClick={() => {
                                                setPostToUpdate(postItem.id);
                                                handleOpen();
                                            }}
                                        >
                                            <Edit></Edit>
                                        </IconButton>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                postsList.map((postItem) => (
                    <div style={{ margin: "2%" }} key={postItem.id}>
                        <Card sx={{ boxShadow: 5 }}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    Titulo: {postItem.title}
                                </Typography>
                                <Typography variant="h6">
                                    Id: {postItem.id} | UserId:{" "}
                                    {postItem.userId}
                                </Typography>
                                <Typography variant="body1">
                                    <br />
                                    Contenido: {postItem.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    onClick={() => {
                                        setPostToUpdate(postItem.id);
                                        handleOpen();
                                    }}
                                >
                                    Remplazar
                                </Button>
                                <Button
                                    size="small"
                                    onClick={() => onClickDelete(postItem.id)}
                                >
                                    Eliminar
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))
            )}

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
                        Editar Post
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Cambie los campos para editar
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
                        Editar
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
        </>
    );
};
