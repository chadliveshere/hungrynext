import moment from 'moment';

export default function Time({ time }) {
	return <time>{moment(time).calendar(null, { sameElse: 'MMMM Do, YYYY' })}</time>;
}
