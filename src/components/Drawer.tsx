// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form'
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Input from '../components/layout/form-controls/Input'
// import TextArea from '../components/layout/form-controls/TextArea'
// import InitiateAppointment from './appointment/InitiateAppointment';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState(false);
//   const onClickSendInvitationButton = () => {
 
//   }

//   let navigate = useNavigate()
//   const {
//       register,
//       handleSubmit,
//       formState: { errors }
//   } = useForm<any>();

//   const toggleDrawer :any =(isOpen : boolean)=>{
    
//       setState(isOpen);
//   }

//   const list = (anchor: Anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={()=>toggleDrawer(true)}
//       onKeyDown={()=>toggleDrawer(false)}
//     >
//       <List>
//  <InitiateAppointment></InitiateAppointment>
// <button className='form-control btn btn-primary'>Send Invite</button>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
   
      
//     </Box>
//   );

//   return (
//     <div>
//       {([ 'right'] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={()=>toggleDrawer(true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state}
           
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
import { Fragment, useState } from "react";

import Drawer from '@mui/material/Drawer';

import Box from '@mui/material/Box';

import { IDrawerProps } from "../types/common.types";

// import { Direction } from "../../types/enum";
import { DrawerHeader } from "../screens/HomeStyle";
// import { DrawerHeader } from "../../screens/HomeStyle";

import IconButton from '@mui/material/IconButton';

import { useTheme } from '@mui/material/styles';

// import CloseIcon from '@mui/icons-material/Close';




const DrawerLayout = (props: IDrawerProps) => {



    const [open, setOpen] = useState<boolean>(false);



    const toggleDrawer = (anchor: any, open: any) => (event: any) => {

        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {

        //     return;

        // }

        props.onClose();

    };



    const onCloseHandler = () => {

        props.onClose()

    }

    const theme = useTheme();

    return (

        <Fragment>



            <Drawer

                anchor={props.anchor}

                open={props.open}

                onClose={toggleDrawer(props.anchor, false)}

                

            >

                <DrawerHeader>

                    <IconButton onClick={onCloseHandler}>

{/*                         {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />} */}

                    </IconButton>

                </DrawerHeader>

                <Box

                    sx={{ width: props.width }}

                    role="presentation"



                >



                    {props.component}

                </Box>



            </Drawer>

        </Fragment>

    )

}

export default DrawerLayout;