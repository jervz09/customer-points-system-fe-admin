// eslint-disable-next-line no-unused-vars
export default function SidebarUserInfo({ user }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        JA
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-800 dark:text-white">John Admin</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Administrator</span>
      </div>
    </div>
  );
}
