import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const job = await prisma.job.findUnique({
      where: {
        id: Number(id),
      },
    });
    return Response.json(job);
  } catch (error) {
    return new Response(`Error ${error}`, {
      status: 500,
    });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const { jobPost, name, company, jobID, dateApplied, status } = await req.json();
    const job = await prisma.job.update({
      where: {
        id: Number(id),
      },
      data: {
        jobPost: jobPost,
        name: name,
        company: company,
        jobID: jobID,
        status: status,
        dateApplied: dateApplied,
      },
    });
    return Response.json(job);
  } catch (error) {
    return new Response(`Error ${error}`, {
      status: 500,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const job = await prisma.job.delete({
      where: {
        id: Number(id),
      },
    });
    return Response.json(job);
  } catch (error) {
    return new Response(`Error ${error}`, {
      status: 500,
    });
  }
}
