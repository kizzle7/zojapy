import { Badge } from "../Badge/index";
export const StatusTag = (data) => {
    return (
      <Badge
        value={data?.status}
        type={data?.status}
      />
    );
  };

