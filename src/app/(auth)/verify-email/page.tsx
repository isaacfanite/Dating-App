import { verifyEmail } from "@/app/actions/authActions";
import ResultMessage from "@/components/ResultMessage";
import AuthWrapper from "@/components/AuthWrapper";
import { Spinner } from "@heroui/react";
import { BsMailbox2Flag } from "react-icons/bs";

export default async function VerifyEmailPage({ searchParams }: { searchParams: { token: string } }) {
    const result = await verifyEmail(searchParams.token);

    return (
        <AuthWrapper
            headerText="Verifying your email address"
            headerIcon={BsMailbox2Flag}
            body={
                <div className="flex flex-col space-y-4 items-center">
                    <div className="flex flex-row items-center">
                        <p className="text-fuchsia-700">Verifying your email address...</p>
                        {!result && <Spinner color="warning" />}
                    </div>
                </div>
            }
            footer={
                <ResultMessage result={result} />
            }
        />
    )
}