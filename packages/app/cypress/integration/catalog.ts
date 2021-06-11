/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="cypress" />
// eslint-disable-next-line no-restricted-imports
import 'os';
import { API_BASE_URL } from '../settings';

describe('Catalog', () => {
  describe('default entities', () => {
    it('import and look for sample servide', () => {
      cy.loginAsGuest();
      cy.request('POST', `${API_BASE_URL}/api/catalog/locations`, {
        target: 'https://github.com/RoadieHQ/sample-service/blob/main/catalog-info-5.yaml',
        type: 'url',
      });

      cy.visit('/catalog');
      cy.get('[data-testid="user-picker-all"]').click();
      cy.contains('sample-service-5');
    });
  });
});