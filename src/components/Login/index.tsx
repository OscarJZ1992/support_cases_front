import { useNavigate } from 'react-router-dom';
import useLoginBears from '@support-cases-app/bears/components/Login/Login.bears';
import Button from '../Shared/Button';
import { ButtonVariant, InputVariant } from '@support-cases-app/utils/constants/tailwind/tv/tailwind.constants';
import Input from '../Shared/Input';
import { useEffect, useState } from 'react';
const LoginComponent = () => {
    const { getUserByName, getState } = useLoginBears()
    const loginState = getState()
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');

    const login = () => {
        getUserByName(userName)
    };

    useEffect(() => {
        if(loginState.value){
            navigate('/home');
        }
    }, [loginState.value])

    return (
        <>
            <div>
                <div className='flex flex-col justify-center items-center h-screen gap-4'>
                    <div className='text-3xl font-bold text-gray-700'>Login Support Cases</div>
                    <div>
                       <Input placeholder='Enter your UserName' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} className={
                            InputVariant({
                                 size: 'md'
                            })
                       }/>
                    </div>
                    <div>
                        <Button onClick={() => login()} text='Login' className={
                            ButtonVariant({
                                size: 'lg',
                                color: 'primary'
                            })
                        }/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;