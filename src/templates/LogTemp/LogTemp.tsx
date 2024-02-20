import { ContextMenu } from "@layout/Menu/MenuContext/MenuContext";
import FeatureForm from "@features/Form/Form";

export const LogTemp = () => {
  return (
    <>
      <ContextMenu isAuthenticated={true} />
      <FeatureForm isReg={false} />
    </>
  );
};
