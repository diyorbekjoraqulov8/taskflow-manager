import {Button} from "@/components/ui/button.tsx";

export default function AppHomePage() {
    return (
        <>
            this is home

            <Button render={(props) => <a href="#" {...props}>Click me</a>} />

            <Button variant="primary">Button</Button>
        </>
    );
}