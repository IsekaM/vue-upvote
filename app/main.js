new Vue({
	el: '#app',

	data: {
		submissions: Seed.submissions
	},

	methods: {
		upvote(submissionId) {
			const submission = this.submissions.find(submission => submission.id === submissionId);
			submission.votes++;
		}
	},

	computed: {
		sortedSubmissions() {
			return this.submissions.sort((a, b) => {
				return b.votes - a.votes;
			});
		}
	}
});
