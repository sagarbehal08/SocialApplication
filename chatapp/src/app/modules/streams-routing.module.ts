import { ImagesComponent } from './../components/images/images.component';
import { ChatComponent } from './../components/chat/chat.component';
import { NotificationsComponent } from './../components/notifications/notifications.component';
import { FollowingComponent } from './../components/following/following.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { StreamsComponent } from './../components/streams/streams.component';
import { CommentsComponent } from './../components/comments/comments.component';
import { PeopleComponent } from '../components/people/people.component';
import { FollowersComponent } from '../components/followers/followers.component';

const routes: Routes = [
	{
		path: 'streams',
		component: StreamsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'post/:id',
		component: CommentsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'people',
		component: PeopleComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'people/following',
		component: FollowingComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'people/followers',
		component: FollowersComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'notifications',
		component: NotificationsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'chat/:name',
		component: ChatComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'images/:name',
		component: ImagesComponent,
		canActivate: [AuthGuard]
	},
	{
		//Default Route
		path: '**',
		redirectTo: 'streams'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class StreamsRoutingModule {}
