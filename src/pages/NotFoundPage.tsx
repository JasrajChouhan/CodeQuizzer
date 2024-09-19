import HomeToggleMode from '@/components/HomeToggleMode';
import { Button } from '@/components/ui/button';
import { Outlet, useNavigate } from 'react-router-dom';


export default function NotFoundPage() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <>
            <HomeToggleMode />
            <div className="flex flex-col items-center justify-center mt-40">

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold  mb-4">
                    404
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600  text-center mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Button
                    onClick={goHome}
                    variant={'outline'}
                >Go Home
                </Button>

                <Outlet />
            </div>

        </>
    );
}
