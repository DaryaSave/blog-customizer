import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface ArrowButtonProps {
	containerOpen: boolean;
	onClick: OnClick;
}

export const ArrowButton = ({ containerOpen, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(
				styles.container,
				containerOpen && styles.container_open
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, containerOpen && styles.arrow_open)}
			/>
		</div>
	);
};
