import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/types/auth.types";
import { B2B_ROLES_CONFIG } from "@/constants/b2b-roles.constants";

export function B2BRoleBadge({ role }: { role: UserRole }) {
  const config = B2B_ROLES_CONFIG[role];
  if (!config) return null;

  return <Badge className={config.badgeColor}>{config.label}</Badge>;
}

export function VerificationStatusBadge({ isVerified }: { isVerified: boolean }) {
  return isVerified ? (
    <Badge variant="success">✓ Verified Business</Badge>
  ) : (
    <Badge variant="warning">Pending Verification</Badge>
  );
}
