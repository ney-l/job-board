import { testData } from '../../src/testing/test-data';

const org = testData.organizations[0];
const job = testData.jobs[0];
const BASE_URL = Cypress.env('baseUrl');

describe('public application flow', () => {
  it('should display the organization public page', () => {
    cy.visit(`${BASE_URL}/organizations/${org.id}`);

    cy.findByRole('heading', { name: org.name }).should(
      'exist'
    );
    cy.findByRole('heading', { name: org.email }).should(
      'exist'
    );
    cy.findByRole('heading', { name: org.phone }).should(
      'exist'
    );
    cy.findByText(new RegExp(org.info, 'i')).should(
      'exist'
    );
  });

  it('should navigate to and display the public job details page', () => {
    cy.findByTestId('jobs-list').should('exist');
    cy.findByRole('row', {
      name: new RegExp(
        `${job.position} ${job.department} ${job.location} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('link', {
        name: /view/i,
      }).click();
    });

    cy.url().should(
      'equal',
      `${BASE_URL}/organizations/${org.id}/jobs/${job.id}`
    );

    cy.findByRole('heading', {
      name: job.position,
    }).should('exist');

    cy.findByText(new RegExp(job.info, 'i')).should(
      'exist'
    );
  });
});
