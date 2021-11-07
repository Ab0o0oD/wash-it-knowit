import {Box, Modal, Typography} from "@mui/material";
import React from "react";
import "./notify-me-modal.css"

interface NotifyMeModalProps {
mobilNUmber: String,
    isOpen:boolean,
    setIsOpen: (open:boolean)=>void
}

export const NotifyMeModal: React.FC<NotifyMeModalProps> = ({mobilNUmber,isOpen,setIsOpen}):any => {

    return (
        <Modal
            open={isOpen}
            onClose={()=>{setIsOpen(!isOpen)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Notification have been registered
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    {`We will send you an SMS on mobil number: ${mobilNUmber} when we have an available washing machine`}
                </Typography>
            </Box>
        </Modal>
    )
}