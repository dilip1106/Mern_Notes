import { useAuthStore } from "../../store/authStore";
import { getInitials } from "../../utils/helper.js";
const ProfileCardInfo = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    }
    return (
        <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getInitials(user?.name)}
        </div>
  
        <div>
          <p className="text-sm font-medium">{user?.name}</p>
        </div>
  
        <button
          className="text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )
}

export default ProfileCardInfo