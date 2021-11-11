/********************************************************************************
 * Copyright (c) 2021 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
package org.eclipse.emfcloud.modelserver.emf.common;

import io.javalin.websocket.WsContext;
import io.javalin.websocket.WsMessageContext;

public interface SessionController extends ModelListener {
   long NO_TIMEOUT = -1;

   boolean subscribe(WsContext client, String modeluri);

   boolean unsubscribe(WsContext client);

   boolean handleMessage(WsMessageContext clientMessage);

   boolean hasSession(String modeluri);
}
