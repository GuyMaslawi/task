import 'date-fns';
import React, { useState, useEffect } from 'react';
import { Header, InputText, SideBar, User } from '../../components';
import { AddUserButton, Content, MainTitle, SearchUser, useStyles } from './OrganizationUsersStyle';
import axios from 'axios';

import { Grid, Dialog, Button, DialogContent, IconButton } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// icons
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

interface IFormInputs {
    Photo: string;
    ID: string;
    FirstName: string;
    LastName: string;
    BirthDate: string;
    Email: string;
    Address: string;
    Role: string;
}

const schema = yup.object().shape({
    ID: yup.number().required().positive().integer(),
    FirstName: yup.string().required().max(25),
    LastName: yup.string().required().max(25),
    BirthDate: yup.string().required(),
    Email: yup.string().required(),
    Address: yup.string().required().max(250),
    Role: yup.string().required(),
});


export const OrganizationUsers = () => {
    const [open, setDialogOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [isUserFetched, setUsersFetched] = useState(false);
    const [isFilteredUsers, setFilteredUsers] = useState([]);
    const classes = useStyles();

    const { register, control, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            Photo: "",
            ID: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Address: "",
            Role: "",
        }
    });

    const usersAPI = 'https://api.backendless.com/525C6ECF-BE35-D74F-FFC7-777E0FA29F00/3777A415-DFD8-4240-B51A-DCE496757AB7/data/cyberhat_users';

    // check if user id exists
    const isUniqueId = (id: string) => {    
       return !users.find((user: any) => user.ID === Number(id));
    }

    const onSubmit = async(data: IFormInputs) => {
        const isUnique = isUniqueId(data.ID);

        console.log("isUnique:" + isUnique);
        // id id not exists make post
        if (isUnique) {
            const results = await axios.post(usersAPI, data);
            console.log("results:" + results);
            // setUsers(results);
            setUsersFetched(false);
            setDialogOpen(false);
        } else {
            console.log('not unique');
        }
    };

    const deleteUser = async (objectId: string) => {
        const url = `https://api.backendless.com/525C6ECF-BE35-D74F-FFC7-777E0FA29F00/3777A415-DFD8-4240-B51A-DCE496757AB7/data/cyberhat_users/${objectId}`;

        const results = await axios.delete(url);
        setUsers(results.data);
        setUsersFetched(false);
        setDialogOpen(false);
    };

    const addNewUserDialog = () => {
        return (
            <Dialog onClose={() => setDialogOpen(false)}
                    className={classes.root}
                    open={open}>

                <IconButton aria-label="close" 
                            className={classes.closeButton} 
                            onClick={() => setDialogOpen(false)}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <h2>New User</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                        <Controller control={control} 
                                    name="Photo"
                                    ref={register}
                                    render={({ onChange, value }) =><input type="file" value={value} onChange={onChange}/>}
                        />
                        <Controller control={control} 
                                    name="ID"
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.ID ? "please enter your id by digits only" : ""} label="ID" onChange={onChange} value={value} />}  />

                        <Controller control={control} 
                                    name="FirstName"
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.FirstName ? "please enter your first name" : ""} label="First Name" onChange={onChange} value={value} />}  />

                        <Controller control={control} 
                                    name="LastName"
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.LastName ? "please enter your last name" : ""} label="Last Name" onChange={onChange} value={value} />}  />

                        <Controller control={control} 
                                    name="Email" 
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.Email ? "please enter correct email" : ""} label="Email" onChange={onChange} value={value} />}  />

                        <Controller control={control} 
                                    name="Address"                                   
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.Address ? "please enter your address" : ""} label="Address" onChange={onChange} value={value} />}  />

                        <Controller control={control} 
                                    name="Role"                           
                                    ref={register}
                                    render={({ onChange, value }) => <InputText helperText={errors.Role ? "please enter your role" : ""} label="Role" onChange={onChange} value={value} />}  />

                        <Grid container justify="center">
                            <Grid item sm={4} xs={12}>
                                <Button type="submit"
                                        variant="contained"
                                        color="secondary">
                                        Add user
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        );
    };

    const addUserButton = () => {
        return (
            <AddUserButton>
                <Button onClick={() => setDialogOpen(true)}>
                    <AddIcon color="secondary" />
                </Button>
            </AddUserButton>
        );
    };

    const searchBar = () => {
        return (
            <SearchUser>
                <SearchIcon />
                <input placeholder="search for a user"
                        onChange={(e: any) => setSearch(e.target.value)} />
            </SearchUser>
        );
    };

    const usersList = () => {
        return (
            <Grid container spacing={2} justify="center">
                {isFilteredUsers.map((item: any, index: any) => {
                    return (
                        <Grid item key={index}>
                            <User id={item.ID}
                                icon={item.Photo}
                                name={item.FirstName}
                                role={item.Role}
                                birthDate={item.BirthDate}
                                address={item.Address}
                                email={item.Email}
                                onClick={() => deleteUser(item.objectId)}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    };

    const getUsers = async () => {
        const results = await axios.get(usersAPI);
        setUsers(results.data);
        setUsersFetched(true);
    };

    useEffect(() => {
        if(!isUserFetched){
            getUsers();
        }

        setFilteredUsers(
            users.filter((item: any) =>
                item.FirstName.toLowerCase().includes(search.toLowerCase())
            )
        );

    }, [users, search, isUserFetched]);


    return (
        <div>
            <Header />
            <SideBar />
            <Content>
                <MainTitle>Organization Users</MainTitle>

                {usersList()}
                {searchBar()}
                {addUserButton()}
                {addNewUserDialog()}

            </Content>
        </div>
    );
};

export default OrganizationUsers;