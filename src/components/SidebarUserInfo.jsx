// eslint-disable-next-line no-unused-vars
export default function SidebarUserInfo() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        {user.avatar || `${user.name.charAt(0)}${user.name.split(' ')[1].charAt(0)}`}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-800 dark:text-white">
          {user.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.role}
        </span>
      </div>
    </div>
  );
}
