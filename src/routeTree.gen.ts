/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CreateImport } from './routes/create'
import { Route as IndexImport } from './routes/index'
import { Route as AssignmentsIndexImport } from './routes/assignments/index'
import { Route as AssignmentsAssignmentIdImport } from './routes/assignments/$assignmentId'
import { Route as AuthLayoutSignupImport } from './routes/_auth-layout.signup'
import { Route as AuthLayoutLoginImport } from './routes/_auth-layout.login'

// Create Virtual Routes

const AuthLayoutLazyImport = createFileRoute('/_auth-layout')()

// Create/Update Routes

const AuthLayoutLazyRoute = AuthLayoutLazyImport.update({
  id: '/_auth-layout',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_auth-layout.lazy').then((d) => d.Route))

const CreateRoute = CreateImport.update({
  path: '/create',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AssignmentsIndexRoute = AssignmentsIndexImport.update({
  path: '/assignments/',
  getParentRoute: () => rootRoute,
} as any)

const AssignmentsAssignmentIdRoute = AssignmentsAssignmentIdImport.update({
  path: '/assignments/$assignmentId',
  getParentRoute: () => rootRoute,
} as any)

const AuthLayoutSignupRoute = AuthLayoutSignupImport.update({
  path: '/signup',
  getParentRoute: () => AuthLayoutLazyRoute,
} as any)

const AuthLayoutLoginRoute = AuthLayoutLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthLayoutLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/create': {
      preLoaderRoute: typeof CreateImport
      parentRoute: typeof rootRoute
    }
    '/_auth-layout': {
      preLoaderRoute: typeof AuthLayoutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth-layout/login': {
      preLoaderRoute: typeof AuthLayoutLoginImport
      parentRoute: typeof AuthLayoutLazyImport
    }
    '/_auth-layout/signup': {
      preLoaderRoute: typeof AuthLayoutSignupImport
      parentRoute: typeof AuthLayoutLazyImport
    }
    '/assignments/$assignmentId': {
      preLoaderRoute: typeof AssignmentsAssignmentIdImport
      parentRoute: typeof rootRoute
    }
    '/assignments/': {
      preLoaderRoute: typeof AssignmentsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CreateRoute,
  AuthLayoutLazyRoute.addChildren([
    AuthLayoutLoginRoute,
    AuthLayoutSignupRoute,
  ]),
  AssignmentsAssignmentIdRoute,
  AssignmentsIndexRoute,
])

/* prettier-ignore-end */
