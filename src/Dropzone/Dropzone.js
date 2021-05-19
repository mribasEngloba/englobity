import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { useTheme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Button, Chip, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzoneStyles } from './dropzone.styles';

export function Dropzone({
	onDrop,
	file,
	disabled,
	onDeleteFile,
	labelDrop,
	isLoading,
	skeletonHeight = 48,
}) {
	const [fileReaded, setFilesReaded] = useState(file);
	const theme = useTheme();
	const classes = useDropzoneStyles();

	useEffect(() => {
		return setFilesReaded(file);
	}, [file]);

	function handleDeleteFile() {
		setFilesReaded();
		onDeleteFile();
	}

	const handleDragEnter = useCallback(
		(event) => {
			event.target.style.backgroundColor = theme.palette.secondary.main;
		},
		[theme]
	);

	const handleDragLeave = useCallback((event) => {
		event.target.style.backgroundColor = 'unset';
	}, []);

	const handleOnDrop = useCallback(
		(acceptedFiles) => {
			onDrop(acceptedFiles);
		},
		[onDrop]
	);

	const { getRootProps, getInputProps } = useDropzone({
		disabled,
		onDrop: handleOnDrop,
		onDragEnter: handleDragEnter,
		onDragLeave: handleDragLeave,
	});

	return (
		<div
			{...getRootProps()}
			className={`${classes.root} ${disabled ? 'Mui-disabled' : ''}`}
		>
			<div className={classes.wrapper}>
				<input {...getInputProps()} />
				{fileReaded ? (
					isLoading ? (
						<Skeleton width='215px' height={skeletonHeight} />
					) : (
						<Chip
							disabled={disabled}
							icon={<FileCopy />}
							label={fileReaded}
							onDelete={() => handleDeleteFile()}
							className={classes.chip}
						/>
					)
				) : (
					<div className={classes.message}>
						<Button
							disabled={disabled}
							variant='primary'
							className={classes.button}
						>
							<CloudUploadIcon />
						</Button>
						<Typography color='textSecondary'>{labelDrop}</Typography>
					</div>
				)}
			</div>
		</div>
	);
}

Dropzone.propTypes = {
	onDrop: PropTypes.func,
	onDeleteFile: PropTypes.func,
	file: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	labelDrop: PropTypes.string,
	isLoading: PropTypes.bool,
	skeletonHeight: PropTypes.number,
};
