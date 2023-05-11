import React from "react";
import { Modal as NBModal, Box, Heading, Button } from "native-base";

export const CustomModal = ({
    id,
    title,
    trigger,
    children,
    onSave,
    onCancel,
    buttonColor = "primary",
    type,
    footerButtons = [],
    isActive,
    onTrigger,
    buttonText,
    ...rest
}) => {
    const closeModal = () => {
        if (onCancel) {
            onCancel();
        } else {
            onTrigger(false);
        }
    };

    return (
        <>
            <Button onPress={() => onTrigger(true)}>{trigger}</Button>
            <NBModal isOpen={isActive} onClose={closeModal} {...rest} placement="center">
                <NBModal.Content maxWidth="400px">
                    <NBModal.CloseButton />
                    <NBModal.Header>
                        <Heading>{title}</Heading>
                    </NBModal.Header>
                    <NBModal.Body>
                        <Box>{children}</Box>
                    </NBModal.Body>
                    <NBModal.Footer>
                        {footerButtons.map((button, index) => (
                            <Button
                                key={index}
                                onPress={button.onClick}
                                colorScheme={button.color}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </NBModal.Footer>
                    {buttonText && (
                        <NBModal.Footer>
                            <Button colorScheme={buttonColor} onPress={onSave}>
                                {buttonText}
                            </Button>
                            <Button onPress={closeModal} ml="auto">
                                Cancel
                            </Button>
                        </NBModal.Footer>
                    )}
                </NBModal.Content>
            </NBModal>
        </>
    );
};