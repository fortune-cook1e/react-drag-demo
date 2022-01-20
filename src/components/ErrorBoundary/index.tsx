import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface Props {
	children: React.ReactNode
}

const ErrorFallback = ({ error }: { error: Error }) => (
	<div role='alert'>
		<p>Something went wrong:</p>
		<pre>{error.message}</pre>
	</div>
)

const AppErrorBoundary = ({ children }: Props): JSX.Element => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
	)
}

export default AppErrorBoundary
