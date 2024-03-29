import { prisma } from '@/app/_lib/prisma';
import TripHeader from '../_components/tripHeader';
import TripReservation from '../_components/tripReservation';
import TripDescription from '../_components/tripDescription';
import TripHighlights from '../_components/tripHighlights';

const getTripDetail = async (tripId: string) => {
	const trip = await prisma.trip.findUnique({
		where: {
			id: tripId,
		},
	});

	return trip;
};

const TripDetails = async ({ params }: { params: { id: string } }) => {
	const trip = await getTripDetail(params.id);

	if (!trip) return null;

	return (
		<>
			<TripHeader trip={trip} />
			<TripReservation trip={trip} />
			<TripDescription description={trip.description} />
			<TripHighlights highlights={trip.highlights} />
		</>
	);
};

export default TripDetails;
