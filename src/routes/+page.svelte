<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import EmptyState from '$lib/components/empty-state.svelte';

	import { getMusics } from './musics.remote';

	const musicQuery = getMusics();
</script>

{#snippet action()}
	<Button
		class="active:scale-[98%] transition-transform"
		onclick={() => getMusics().refresh()}
	>
		Refresh
	</Button>
{/snippet}

{#snippet loading_icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="size-16 animate-spin"
		fill="currentColor"
		viewBox="0 0 256 256"
	>
		<path
			d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
		<path
			d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"
		></path>
	</svg>
{/snippet}

{#snippet error_icon()}
	<svg
    xmlns="http://www.w3.org/2000/svg"
    class="size-16"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path
      d="M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z" opacity="0.2"></path><path d="M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"
    ></path>
	</svg>
{/snippet}

<nav class="sticky top-0 z-10 flex items-center justify-end gap-2 bg-background pt-3 pb-6">
	<Button onclick={() => getMusics().refresh()}>Download all lyrics</Button>
</nav>

<main class="h-full">
	{#if musicQuery.error}
		<EmptyState
			icon={error_icon}
			title="Error loading music"
			description={"Something went wrong while loading your music. Please try again later."}
			{action}
		/>
	{:else if musicQuery.loading}
		<EmptyState
			icon={loading_icon}
			title="Loading music"
			description="Please wait while we load your music."
		/>
	{:else}
		<Table.Root class="relative rounded-xl bg-white text-base">
		<Table.Header>
			<Table.Row>
				<Table.Head class="pl-6">Track</Table.Head>
				<Table.Head class="text-center">Duration</Table.Head>
				<Table.Head class="text-center">Lyrics</Table.Head>
				<Table.Head class="pr-6 text-center">Actions</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each musicQuery.current as track}
				<Table.Row>
					<Table.Cell class="w-3/4 pl-6">
						<div>
							<p>{track.name}</p>
							<div class="text-sm text-muted-foreground">
								<span>{track.album}</span>{' • '}<span>{track.artist}</span>
							</div>
						</div>
					</Table.Cell>
					<Table.Cell class="text-center">{track.duration}</Table.Cell>
					<Table.Cell class="text-center">
						{#if track.lyrics}
							<span class="rounded-full border border-foreground bg-muted px-3 py-0.5 text-xs">
								{track.lyrics}
							</span>
						{/if}
					</Table.Cell>
					<Table.Cell class="gap-0.5 pr-6">
						<Button variant="ghost" size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path
									d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z"
									opacity="0.2"
								></path>
								<path
									d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"
								></path>
							</svg>
						</Button>
						<Button variant="ghost" size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path d="M216,144a32,32,0,1,1-32-32A32,32,0,0,1,216,144Z" opacity="0.2"></path>
								<path
									d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z"
								></path>
							</svg>
						</Button>
						<Button variant="ghost" size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4"
								fill="currentColor"
								viewBox="0 0 256 256"
							>
								<path
									d="M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z"
									opacity="0.2"
								></path>
								<path
									d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188,164,103.31,180.69,120,96,204.69ZM68,176.69,51.31,160,136,75.31,152.69,92Zm-20,2.62L76.69,208H48Zm144-70.62L147.32,64l24-24L216,84.69Z"
								></path>
							</svg>
						</Button>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
	{/if}
</main>
