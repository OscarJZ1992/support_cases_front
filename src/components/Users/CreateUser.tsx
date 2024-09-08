import React, { useEffect, useState } from 'react';
import Label from '../Shared/Label';
import Input from '../Shared/Input';
import { ButtonVariant, InputVariant } from '@support-cases-app/utils/constants/tailwind/tv/tailwind.constants';
import Button from '../Shared/Button';
import useAlertBears from '@support-cases-app/bears/Alert';
import { TYPES_ALERTS } from '@support-cases-app/utils/constants/constants';
import { useNavigate } from 'react-router-dom';
import useUsersBears from "@support-cases-app/bears/components/Users/Users.bears";

const CreateUserComponent = () => {
    const { saveUser } = useUsersBears()
    const [userName, setUserName] = useState('');
    const {setAlert} = useAlertBears()
    const navigate = useNavigate()

    const createUser = () => {
        saveUser({username: userName})
        setUserName('')
        setAlert({message: 'User created successfully', type: TYPES_ALERTS.SUCCESS})
        navigate("/users")
    }

    return (
        <>
            <div className='space-y-4'>
                <div>
                    <Label text="Users > Create User" />
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                    <Input onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setUserName(e.target.value)} placeholder='Enter the User Name' className={InputVariant({
                        size: 'lg',
                        variant: 'outline',
                        width: 'lg'
                    })}/>
                    </div>
                    <div>
                    <Button disabled={userName.trim() === ''} text='Create User' onClick={createUser} className={ButtonVariant({
                        color: userName.trim() === '' ? 'disabled': 'primary',
                        size: 'md'
                    })}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CreateUserComponent;