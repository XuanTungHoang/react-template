import ErrorBoundary from '@page/ErrorBoudary';
import { Navigate, RouteObject } from 'react-router-dom';

export const genCRUD = (
  router: RouteObject,
  {
    index,
    indexPermission,
    add,
    addPermission,
    edit,
    editPermission,
    detail,
    detailPermission,
  }: {
    index: JSX.Element;
    indexPermission?: string[];
    add?: JSX.Element;
    addPermission?: string[];
    edit?: JSX.Element;
    editPermission?: string[];
    detail?: JSX.Element;
    detailPermission?: string[];
  },
) => {
  if (!router.children) {
    router.permission = indexPermission
    router.children = [{ index: true, element: index }];
    if (edit)
      router.children.push({
        path: 'edit',
        permission: editPermission,
        children: [
          { 
            index: true,
            element: <Navigate to={router.path || '../'} />,
          },
          { 
            path: ':id', 
            element: edit,
          },
        ],
      });
    if (add) router.children.push({ path: 'add', element: add, permission: addPermission });
    if (detail) router.children.push({ path: ':id', element: detail, permission: detailPermission });
    return router;
  }
  return router;
};
