export default function signIn(){
    return Promise(resolve => {
        setiTimeout(() => {
            resolve({
                token: 'kkk',
                user:{
                    name: 'Davi',
                    email: 'okok@gmail.com',
                },
            });
        }, 2000);
    });
}